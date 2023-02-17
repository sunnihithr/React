import { danger } from "danger"

const docs = danger.git.fileMatch("**/*.md")
const app = danger.git.fileMatch("src/**/*.ts")
const tests = danger.git.fileMatch("*/__tests__/*")

if (docs.edited) {
  message("Thanks - We :heart: our [documentarians](http://www.writethedocs.org/)!")
}

if (app.modified && !tests.modified) {
  warn("You have app changes without tests.")
}
