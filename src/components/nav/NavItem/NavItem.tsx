import { NavLink } from 'react-router-dom';

import './NavItem.scss';

interface NavItemProps {
  to: string;
  iconName: string;
  label: string;
}

interface NavData {
  isActive: boolean;
}

const NavItem = ({ to, iconName, label }: NavItemProps) => {
  const handleNavLinkClassName = (navData: NavData, baseClassName: string) => {
    return navData.isActive
      ? `${baseClassName} ${baseClassName}--active`
      : baseClassName;
  };

  return (
    <NavLink
      to={to}
      className={(navData) => handleNavLinkClassName(navData, 'nav-item')}
    >
      <span className="nav-item__icon material-icons">{iconName}</span>
      <div className="nav-item__label">{label}</div>
    </NavLink>
  );
};

export { NavItem };
