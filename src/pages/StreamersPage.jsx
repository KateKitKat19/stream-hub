import { StreamersList } from 'components/StreamersList/StreamersList';
import { Form } from 'components/SubmissionForm/SubmissionForm';

export default function StreamersPage() {
  return (
    <div>
      <h2>We`re glad to see you in our Stream-Hub</h2>
      <Form></Form>
      <StreamersList></StreamersList>
    </div>
  );
}
