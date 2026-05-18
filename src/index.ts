/**
 * @amlplugins/google-generative-ai
 *
 * Thin namespaced re-export of the native @google/generative-ai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Gemini API (Generative AI).
 */

import * as _sdk from "@google/generative-ai";
export * from "@google/generative-ai";
export { _sdk as sdk };
export default _sdk;
