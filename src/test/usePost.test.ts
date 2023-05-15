import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home from "@app/app/page";


test('Posts Be Exits', () => {
    render(Home );
    const result = within(screen.getByTitle('Posts'));
    expect(result).toBeDefined()

})