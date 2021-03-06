import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useContacts } from './useContacts';
import { ContactsTable } from './ContactsTable';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    headContainer: { marginBottom: theme.spacing(3) },
  })
);

export const Contacts = () => {
  const classes = useStyles();
  const contacts = useContacts();

  return (
    <Container fixed className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.headContainer}>
          <Typography variant='h4' component='h1' gutterBottom>
            Contacts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            // такое решение не очень хорошо по перформенсу
            if (contacts.isLoading) {
              return <div>...loading</div>;
            }
            if (contacts.isError) {
              return <div>...error</div>;
            }
            return <ContactsTable data={contacts.data} />
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
