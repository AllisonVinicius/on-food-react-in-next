import { IconFilter } from "@/icons";
import { Menu } from "@headlessui/react";
import { ItemLink } from "./item-link";
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
      <Menu.Items className={Styles.options}>
        <div>
          <Menu.Item>
            <ItemLink href="/Discover/sao-paulo-sp">São PAulo, SP</ItemLink>
          </Menu.Item>
          <Menu.Item>
            <ItemLink href="/Discover/florianopolis-sc">
              {" "}
              Florianospolis, SC
            </ItemLink>
          </Menu.Item>
          <Menu.Item>
            <ItemLink href="/Discover/porto-alegre-rs">
              Porto Alegrem, RS
            </ItemLink>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
