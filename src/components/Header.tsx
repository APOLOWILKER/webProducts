interface HeaderProps {
  header: string;
}

const Header: React.FC<HeaderProps> = ({ header }) => {
  return (
    <header className="bg-gray-800 text-white text-center p-4 rounded">
      <h1 className="text-2xl">{header}</h1>
    </header>
  );
}

export default Header;
