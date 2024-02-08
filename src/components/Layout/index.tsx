import { Wrapper } from './styled';

interface ILayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: ILayoutProps) => <Wrapper>{children}</Wrapper>;

export default Layout;
