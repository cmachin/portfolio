import { getCertifications } from "../api/resume";

export const useGetCertifications = () => {
  const certifications = getCertifications();

  return { certifications };
};
