import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      This is my HomePage
      <NavLink to="/streamers">Go to streamers list</NavLink>
    </div>
  );
}
