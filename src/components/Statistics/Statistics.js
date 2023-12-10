import {
  Section,
  List,
  Item,
  Title,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  const StatisticsList = stats.map(item => (
    <Item key={item.id}>
      <Label>{item.label}</Label>
      <Percentage>{item.percentage}%</Percentage>
    </Item>
  ));

  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>{StatisticsList}</List>
    </Section>
  );
}
