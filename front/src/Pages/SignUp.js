// Pages/SignUp.js
import React, { useState } from 'react';
import Step1Username from './SignUp/Step1Username';
import Step2Password from './SignUp/Step2Password';
import Step3Email from './SignUp/Step3Email';
import Step4NicknameTerms from './SignUp/Step4NicknameTerms';

function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    nickname: '',
    agreed: false,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  switch (step) {
    case 1:
      return <Step1Username nextStep={nextStep} formData={formData} handleChange={handleChange} />;
    case 2:
      return <Step2Password nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />;
    case 3:
      return (
        <Step3Email
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Step4NicknameTerms
          formData={formData}
          handleChange={handleChange}
          onSubmit={() => {
          }}
          prevStep={prevStep}
        />
      );

    default:
      return <div>오류 발생</div>;
  }
}

export default SignUp;
