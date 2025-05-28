import { useState } from 'react';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';

const StepOne = ({ goToNext }) => (
	<>
	<h1>Step 1</h1>
	<button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
	</>
);

const StepTwo = ({ goToNext }) => (
	<>
	<h1>Step 2</h1>
	<button onClick={() => goToNext({ age: 40 })}>Next</button>
	</>
);

const StepThree = ({ goToNext }) => (
	<>
	<h1>Congratulations! You qualify for the senior discount!</h1>
	<button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
	</>
);

const StepFour = ({ goToNext }) => (
	<>
	<h1>Step 4</h1>
	<button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
	</>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  }

	return (
		<ControlledOnboardingFlow
      currentIndex={currentIndex}
      onNext={onNext}
      onFinish={() => alert('Done!')}
    >
			<StepOne />
			<StepTwo />
			{onboardingData.age >= 65 && <StepThree />}
      <StepFour />
		</ControlledOnboardingFlow>
	);
}

export default App;