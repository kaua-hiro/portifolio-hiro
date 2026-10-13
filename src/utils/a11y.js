/*
 * Torna clicável por teclado um elemento que não é <button> nativo
 * (mantém o CSS existente intacto). Enter e Espaço disparam a ação,
 * como um botão de verdade.
 */
export const asButton = (onActivate, label) => ({
    role: 'button',
    tabIndex: 0,
    'aria-label': label,
    onClick: onActivate,
    onKeyDown: (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onActivate(e)
        }
    },
})
