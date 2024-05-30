import { Link } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Platform } from "react-native";

export function ExternalLink(
  props: Omit<React.ComponentProps<typeof Link>, "href"> & { href: string }
) {
  const { href } = props;
  return (
    <Link
      target="_blank"
      {...props}
      href={href}
      onPress={(e) => {
        if (Platform.OS !== "web") {
          // Prevent the default behavior of linking to the default browser on native.
          e.preventDefault();
          // Open the link in an in-app browser.
          WebBrowser.openBrowserAsync(href as string);
        }
      }}
    />
  );
}
