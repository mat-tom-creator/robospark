// Email validation using a simple regex
export const validateEmail = (email: string): string | undefined => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!regex.test(email)) return 'Please enter a valid email address';
    return undefined;
  };
  
  // Password validation with requirements
  export const validatePassword = (password: string): string | undefined => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters long';
    if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter';
    if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter';
    if (!/[0-9]/.test(password)) return 'Password must contain at least one number';
    return undefined;
  };
  
  // Password confirmation validation
  export const validatePasswordConfirmation = (
    passwordConfirmation: string,
    formValues?: Record<string, string>
  ): string | undefined => {
    if (!passwordConfirmation) return 'Please confirm your password';
    if (formValues && passwordConfirmation !== formValues.password) {
      return 'Passwords do not match';
    }
    return undefined;
  };
  
  // Required field validation
  export const validateRequired = (value: string, fieldName: string = 'This field'): string | undefined => {
    if (!value) return `${fieldName} is required`;
    return undefined;
  };
  
  // Phone number validation
  export const validatePhone = (phone: string): string | undefined => {
    const regex = /^\+?[0-9]{10,15}$/;
    if (!phone) return undefined; // Optional field
    if (!regex.test(phone.replace(/\s+/g, ''))) {
      return 'Please enter a valid phone number';
    }
    return undefined;
  };
  
  // Name validation
  export const validateName = (name: string): string | undefined => {
    if (!name) return 'Name is required';
    if (name.length < 2) return 'Name must be at least 2 characters long';
    return undefined;
  };
  
  // Age validation
  export const validateAge = (age: string): string | undefined => {
    const ageNum = parseInt(age, 10);
    if (!age) return 'Age is required';
    if (isNaN(ageNum)) return 'Please enter a valid age';
    if (ageNum < 3 || ageNum > 18) return 'Age must be between 3 and 18';
    return undefined;
  };