import React from 'react';
import MenuGestionCard from '@/components/molecules/MenuGestionCard';


const StatsCardsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 overflow-hidden">
      <MenuGestionCard
        title="Turnos Cubiertos"
        value="92%"
        subtitle="+3% vs mes anterior"
        iconType="check"
      />
      <MenuGestionCard
        title="Horas Extra"
        value="156"
        subtitle="+8% vs semana anterior"
        iconType="time"
      />
      <MenuGestionCard
        title="Ausencias"
        value="8"
        subtitle="2 más que ayer"
        iconType="alret"
      />
      <MenuGestionCard
        title="Trabajadores Activos"
        value="24"
        subtitle="100% disponibilidad"
        iconType="people"
      />
      <MenuGestionCard
        title="Incidentes de Seguridad"
        value="0"
        subtitle="30 días sin incidentes"
        iconType="escudo"
      />
      <MenuGestionCard
        title="Productividad"
        value="98%"
        subtitle="Meta: 95%"
        iconType="flecha"
      />
    </div>
  );
};

export default StatsCardsGrid;
