import { useState } from 'react';
import './App.css';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';
import Step5 from './components/steps/Step5';
import Step6 from './components/steps/Step6';



function App() {

  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div >
      {step === 1 && <Step1 nextStep={nextStep} />}
      {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Step4 nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <Step5 nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <Step6 prevStep={prevStep} />}
    </div>
  );
}

export default App;
