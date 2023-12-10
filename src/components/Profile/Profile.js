import {
  Container,
  Description,
  Avatar,
  Info,
  List,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Info> {username} </Info>
        <Info> @{tag} </Info>
        <Info> {location} </Info>
      </Description>

      <List>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </List>
    </Container>
  );
}
