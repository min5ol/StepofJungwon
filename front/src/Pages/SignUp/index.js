import React, { useState } from 'react';
import Step1Username from './Step1Username';
import Step2Password from './Step2Password';
import Step3Email from './Step3Email';
import Step4NicknameTerms from './Step4NicknameTerms';

function SignUp() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <>
      {step === 1 && <Step1Username nextStep={nextStep} />}
      {step === 2 && <Step2Password nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3Email nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Step4NicknameTerms prevStep={prevStep} />}
    </>
  );
}

export default SignUp;
