import { Props } from "@/models/props";
import styles from "@/layouts/global-layout/global-layout.module.css";

function GlobalLayout({ children }: Pick<Props, "children">) {
  return <div className={styles["global-layout"]}>{children}</div>;
}

export default GlobalLayout;
