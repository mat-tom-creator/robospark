import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface ValidationRules {
  [key: string]: (value: string, formValues?: Record<string, string>) => string | undefined;
}

const useForm = <T extends Record<string, string>>(
  initialValues: T,
  validationRules?: ValidationRules,
  onSubmit?: (values: T) => void
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    if (!validationRules || !validationRules[name]) return undefined;
    return validationRules[name](value, values);
  };

  const validateForm = (): boolean => {
    if (!validationRules) return true;

    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(values).forEach(key => {
      const error = validateField(key, values[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setValues({
      ...values,
      [name]: value
    });

    if (validationRules && validationRules[name]) {
      const error = validateField(name, value);
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error || ''
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      if (onSubmit) {
        onSubmit(values);
      }
      
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset
  };
};

export default useForm;