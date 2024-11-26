export interface SampleProps {
  test: string;
}

const Sample = ({ test }: SampleProps) => {
  return <div>Testing: {test}</div>;
};

export default Sample;
