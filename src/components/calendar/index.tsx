import React, { useState, useEffect } from 'react';
import { Content, ContentTh, ContentTd, ContentButton } from './styles';

interface CalendarioConsultaProps {
  diasDisponiveis: { [key: string]: number };
  onCheckboxChange: (day: string, time: string) => void;
}

const CalendarioConsulta: React.FC<CalendarioConsultaProps> = ({ diasDisponiveis, onCheckboxChange }) => {
  const [horariosDisponiveis, setHorariosDisponiveis] = useState<string[]>([]);
  const [selectedCheckbox, setSelectedCheckbox] = useState<{ [key: string]: string | null }>({});

  useEffect(() => {
    // Lógica para definir os horários disponíveis (das 8h às 16h)
    const horarios: string[] = [];
    for (let i = 8; i <= 16; i++) {
      horarios.push(`${i}:00`);
    }
    setHorariosDisponiveis(horarios);
  }, []);

  const handleCheckboxChange = (dia: string, horario: string) => {
    setSelectedCheckbox((prevSelected) => ({
      ...prevSelected,
      [dia]: horario,
    }));
    onCheckboxChange(dia, horario);
  };

  return (
    <div>
      <Content>
        <thead>
          <tr>
            <ContentTh>Dia</ContentTh>
            {horariosDisponiveis.map((horario) => (
              <ContentTh key={horario}>{horario}</ContentTh>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(diasDisponiveis).map(([dia, disponivel]) =>
            disponivel !== 0 && (
              <tr key={dia}>
                <ContentTd>{dia}</ContentTd>
                {horariosDisponiveis.map((horario) => (
                  <ContentTd key={`${dia}-${horario}`}>
                    {disponivel !== 0 && (
                      <ContentButton
                        type="checkbox"
                        checked={selectedCheckbox[dia] === horario}
                        onChange={() => handleCheckboxChange(dia, horario)}
                      />
                    )}
                  </ContentTd>
                ))}
              </tr>
            )
          )}
        </tbody>
      </Content>
    </div>
  );
};

export default CalendarioConsulta;
