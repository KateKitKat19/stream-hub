import { useDispatch } from 'react-redux';
import { addStreamer } from 'redux/streamers/operations';
import { Select } from '@chakra-ui/react';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
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

      <Select name="platform" size="lg" placeholder='Select platform'>
        <option value="Twitch">Twitch</option>
        <option value="YouTube">YouTube</option>
        <option value="TikTok">TikTok</option>
        <option value="Kick">Kick</option>
        <option value="Rumble">Rumble</option>
      </Select>

      <button type="submit" aria-label="Submit form">
        Submit
      </button>
    </form>
  );
};
