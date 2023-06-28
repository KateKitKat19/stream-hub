import { useDispatch } from 'react-redux';
import { addStreamer } from 'redux/streamers/operations';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      name: form.elements.name.value,
      description: form.elements.description.value,
      platform: form.elements.platform.value,
    };
    console.log(
      '🚀 ~ file: SubmissionForm.jsx:16 ~ handleSubmit ~ data:',
      data
    );
      dispatch(
        addStreamer({
          name: form.elements.name.value,
          description: form.elements.description.value,
          platform: form.elements.platform.value,
        })
      );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" name="description" />

      <label htmlFor="platform">Platform:</label>
      <select id="platform" name="platform">
        <option value="Twitch">Twitch</option>
        <option value="YouTube">YouTube</option>
        <option value="TikTok">TikTok</option>
        <option value="Kick">Kick</option>
        <option value="Rumble">Rumble</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};
