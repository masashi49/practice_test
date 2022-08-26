import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

describe('Rendering', () => {
    it('Should render hello text', () => {
        render(<Home />)  // Homeコンポーネントをレンダリング
        expect(screen.getByRole("heading")).toBeTruthy(); // expectの内容が "あります"
        expect(screen.queryByText(/learn/)).toBeTruthy(); // expectの内容が "あります"

        // か？（スクリーンにあるテキスト(Welcome to)）含まれている();
        expect(screen.getByText(/Welcome to/)).toBeInTheDocument();
        // expect = 達成すべきテストの内容
        expect(screen.getAllByRole("button")[0]).toBeTruthy();
        expect(screen.getByTestId("hello")).toBeTruthy();
    })
})
