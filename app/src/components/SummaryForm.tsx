import { Show, createSignal } from "solid-js";
import "./General.scss";
import { getSummary } from "../service/SummaryService";
import { savePost, savePostLocal } from "../service/PostService";

export function SummaryForm() {
  const [text, setText] = createSignal("");
  const [summary, setSummary] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [isAnalyzed, setAnalyzed] = createSignal();

  async function save() {
    await savePostLocal(text(), summary());
    setLoading(false);
    window.location.href = "/";
  }

  function analyze() {
    Promise.all([
      getSummary(text()),
    ]).then(values => {
      setSummary(values[0]);
      setAnalyzed(true);
      setLoading(false);
    });
  }

  function reset() {
    setText("");
    setSummary("");
    setAnalyzed(false);
  }

  async function post() {
    isAnalyzed() ? setLoading(false) : setLoading(true);
    isAnalyzed() ? await save() : analyze();
  }

  return <div class="form">
    <div class="content">
      <h3>Write Here</h3>

      <textarea maxLength={"1000"} value={text()} onChange={ev => setText(ev.target.value)} />

      <Show when={summary().length > 0}>
        <section class="tldr">
          <h3>Summary</h3>
          <p>{summary()}</p>
        </section>
      </Show>


      <section class="row">
        <button class="btn" onClick={(post)}>
          {loading() ? "Summarizing..." : isAnalyzed() ? "Save" : "Summarize"}
        </button>
        <Show when={isAnalyzed()}>
          <button class="btn" onClick={reset}>
            {"Reset"}
          </button>
        </Show>
      </section>
    </div>
  </div>
}