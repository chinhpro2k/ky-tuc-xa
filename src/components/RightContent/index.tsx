import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import React, { useEffect } from "react";
import { history, useModel } from "umi";
import AvatarDropdown from "./AvatarDropdown";
import ModuleSwitch from "./ModuleSwitch";
import NoticeIconView from "./NoticeIcon";
import styles from "./index.less";
import { getUserInfo } from "@/services/base/api";

export type SiderTheme = "light" | "dark";

const GlobalHeaderRight: React.FC = () => {
  const { initialState, setInitialState } = useModel("@@initialState");
  console.log("concas");
  console.log("zinitialState.currentUser", initialState.currentUser);

  const getInfo = async () => {
    try {
      const info = await getUserInfo(localStorage.getItem('token')??'');
      if (info) {
        setInitialState({
          ...initialState,
          currentUser: info?.data?.data,
          // authorizedPermissions: decoded?.authorization?.permissions,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!initialState?.currentUser) {
      getInfo();
    }
  }, [initialState]);

  if (!initialState || !initialState.currentUser) {
    return null;
  }

  return (
    <div className={styles.right}>
      {/*<ModuleSwitch />*/}

      {/*<NoticeIconView />*/}

      {/*<Tooltip title="Giới thiệu chung" placement="bottom">*/}
      {/*  <a onClick={() => history.push("/gioi-thieu")}>*/}
      {/*    <InfoCircleOutlined />*/}
      {/*  </a>*/}
      {/*</Tooltip>*/}

      <AvatarDropdown menu />
    </div>
  );
};

export default GlobalHeaderRight;
