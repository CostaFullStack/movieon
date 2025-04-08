const departmentMap = {
  Acting: "Atuação",
  Directing: "Direção",
  Writing: "Roteiro",
  Production: "Produção",
  Editing: "Edição",
  Camera: "Câmera",
  Sound: "Som",
  Art: "Arte",
  "Costume & Make-Up": "Figurino e Maquiagem",
  Crew: "Equipe Técnica",
  "Visual Effects": "Efeitos Visuais",
  Lighting: "Iluminação",
};

export const KnownForDepartment = ({ department }) => {
  return departmentMap[department] || department;
};
