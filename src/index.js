import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import ResizeObserver from "resize-observer-polyfill";
import { AnimatePresence } from "framer-motion";
import { ToggleLayer } from "react-laag";

/**
 * Icons
 */

import { Image } from "styled-icons/boxicons-regular/Image";
import { PlayCircle as Video } from "styled-icons/boxicons-regular/PlayCircle";
import { Music } from "styled-icons/boxicons-solid/Music";
import { File } from "styled-icons/boxicons-regular/File";
import { LocationOn as Location } from "styled-icons/material/LocationOn";
import { Code } from "styled-icons/boxicons-regular/Code";

/**
 * Components
 */

import Button from "./Button";
import Menu from "./Menu";

/**
 * Main
 */

function Example() {
  return (
    <div>
      <ToggleLayer
        ResizeObserver={ResizeObserver}
        placement={{
          anchor: "CENTER"
        }}
        renderLayer={({ isOpen, layerProps, close }) => {
          return (
            <AnimatePresence>
              {isOpen && (
                <Menu
                  {...layerProps}
                  close={close}
                  items={[
                    { Icon: Image, value: "image", label: "Image" },
                    { Icon: Video, value: "video", label: "Video" },
                    { Icon: Music, value: "music", label: "Music" },
                    { Icon: File, value: "file", label: "File" },
                    { Icon: Location, value: "location", label: "Location" },
                    { Icon: Code, value: "code", label: "Code" }
                  ]}
                />
              )}
            </AnimatePresence>
          );
        }}
      >
        {({ triggerRef, toggle, isOpen }) => (
          <Button ref={triggerRef} onClick={toggle} isOpen={isOpen} />
        )}
      </ToggleLayer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
