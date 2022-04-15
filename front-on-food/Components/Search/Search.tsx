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
      <Menu.Items>
        <div>
          <Menu.Items>
            <ItemLink href="/Discover/sao-paulo-sp">São PAulo, SP</ItemLink>
          </Menu.Items>
          <Menu.Items>
            <ItemLink href="/Discover/florianopolis-sc">
              {" "}
              Florianospolis, SC
            </ItemLink>
          </Menu.Items>
          <Menu.Items>
            <ItemLink href="/Discover/porto-alegre-rs">
              Porto Alegrem, RS
            </ItemLink>
          </Menu.Items>
        </div>
      </Menu.Items>
    </Menu>
  );
}
