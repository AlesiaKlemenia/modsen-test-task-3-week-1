import { ILayoutProps } from './interfaces';
import { Wrapper } from './styled';

const Layout = ({ children }: ILayoutProps): JSX.Element => (
  <Wrapper>{children}</Wrapper>
);

export default Layout;
