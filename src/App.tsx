import './App.css';
import { Box } from './components';

export function App() {
    return (
        <main>
            <Box value='a' status='absent' />
            <Box value='a' status='present' />
            <Box value='a' status='correct' />
            <Box value='a' status='empty' />
            <Box value='a' status='edit' />
        </main>
    );
}
