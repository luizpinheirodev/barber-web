import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  const profileAdjusted = {
    ...profile,
    avatarUrl: !profile.avatar ? null : profile.avatar.url,
  };

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profileAdjusted.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profileAdjusted.avatarUrl ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Luiz Pinheiro"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
