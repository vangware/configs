import { readFile, writeFile } from "fs/promises";
import { exit } from "process";

/** @typedef {import("./package.json")} PackageJSON */
/** @typedef {[keyof PackageJSON["peerDependencies"], PackageJSON["peerDependencies"][keyof PackageJSON["peerDependencies"]]]} PackageJSONEntry */

// eslint-disable-next-line functional/no-expression-statements
void readFile("package.json", "utf-8")
	.then(JSON.parse)
	.then(
		/** @param {PackageJSON} packageJSON */ packageJSON =>
			writeFile(
				"package.json",
				`${JSON.stringify(
					Object.fromEntries(
						Object.entries(packageJSON).map(([key, value]) => [
							key,
							key === "peerDependencies"
								? Object.fromEntries(
										/** @type {ReadonlyArray<PackageJSONEntry>} */ (
											Object.entries(
												packageJSON.peerDependencies,
											)
										).map(([peerDependency, version]) => [
											peerDependency,
											`${packageJSON.devDependencies[
												peerDependency
											]
												.split(".")
												.map((part, index) =>
													index >
													(version.startsWith("^")
														? 0
														: 1)
														? "0"
														: part,
												)
												.join(".")}`,
										]),
								  )
								: value,
						]),
					),
					undefined,
					"\t",
				)}\n`,
			),
	)
	.then(() => exit(0))
	// eslint-disable-next-line no-console
	.catch(error => (console.error(error), exit(1)));
