import { IconFilter } from "@/icons";
import { Menu } from "@headlessui/react";
import Styles from "./search.module.css";
export function Search() {
  return (
    <Menu as="div" className={Styles.search}>
      <Menu.Button>
        Selecione uma cidade para iniciar{" "}
        <span>
          <IconFilter />
        </span>
      </Menu.Button>
      <Menu.Items>
        <div>
          <Menu.Items>
            <span>São PAulo, SP</span>
          </Menu.Items>
          <Menu.Items>
            <span>Florianospolis, SC</span>
          </Menu.Items>
          <Menu.Items>
            <span>Porto Alegrem, RS</span>
          </Menu.Items>
        </div>
      </Menu.Items>
    </Menu>
  );
}
