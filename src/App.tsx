import { CompletedRow, CurrentRow, EmptyRow } from './components';
import './App.css';

export function App() {
    return (
        <main>
            <CompletedRow word='break' solution='sower' />
            <CompletedRow word='break' solution='sower' />
            <CompletedRow word='break' solution='sower' />
            <CurrentRow word='bre' />
            <EmptyRow />
            <EmptyRow />
        </main>
    );
}
