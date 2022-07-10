import { useMemo, useState } from "react";

const useFormData = (initialState) => {
  const [state, setState] = useState(initialState);

  const formData = useMemo(() => ({ state, setState }), [state]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return [formData, handleInputChange];
};

export default useFormData;
