export default function routes(app, addon) {
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    app.get('/todo', (req, res) => {
        res.render(
          'index.jsx',
          {
            title: 'TodoList Tasks'
          }
        );
    });
}


