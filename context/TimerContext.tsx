import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TimerContextType = {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
};

export const TimerContext = createContext<TimerContextType>({
  duration: 10,
  setDuration: () => {},
});

type TimerProviderProps = {
  children: ReactNode;
};

const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
  const [duration, setDuration] = useState<number>(10);

  return (
    <TimerContext.Provider value={{ duration, setDuration }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
