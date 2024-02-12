import { Wrapper } from './styled';

interface ILayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: ILayoutProps): JSX.Element => (
  <Wrapper>{children}</Wrapper>
);

export default Layout;
