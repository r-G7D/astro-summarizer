import { Show, createSignal } from 'solid-js';
import './General.scss'

export function Notice(props: { header: string, summary: string }) {
    const [closed, setClosed] = createSignal();

    return <Show when={!closed()}>
        <div class="post">
            <div class='row'>
                <h3>{props.header}</h3>
                <button class="btn" onClick={() => setClosed(true)}>close</button>
            </div>
            <p>{props.summary}</p>
        </div>
    </Show>
}