import { ILayoutProps } from '@components/Layout/interfaces';
import { Wrapper } from '@components/Layout/styled';

const Layout = ({ children }: ILayoutProps): JSX.Element => (
  <Wrapper>{children}</Wrapper>
);

export default Layout;
