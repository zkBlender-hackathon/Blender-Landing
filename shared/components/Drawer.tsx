import { DrawerProps, Drawer as DrawerAntd } from "antd";
interface Props extends DrawerProps {}

export const Drawer: React.FC<Props> = ({ ...props }) => {
  return <DrawerAntd {...props} />;
};
