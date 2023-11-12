export default appConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false,
        }
    }
}
})