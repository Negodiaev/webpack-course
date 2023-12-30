import path from "path";
import webpack from "webpack";

import { buildWebpack } from "./config/build/buildWebpack";
import {
  IBuildPaths,
  TBuildMode,
  TBuildPlatform,
} from "./config/build/types/types";

interface IEnvVariables {
  mode?: TBuildMode;
  port?: number;
  platform?: TBuildPlatform;
  analyzer?: boolean;
}

export default (env: IEnvVariables) => {
  const paths: IBuildPaths = {
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    platform: env.platform ?? "desktop",
    analyzer: env.analyzer,
  });

  return config;
};
