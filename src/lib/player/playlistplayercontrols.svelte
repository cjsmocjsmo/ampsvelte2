<script>

	import { duration, showPlayButton } from '$lib/store/stores';
	import { Howler } from 'howler';

	const handleClick = () => {
		if ($showPlayButton) {
			showPlayButton.set(false)
		} else {
			showPlayButton.set(true)
			Howler.stop()
		}
	}
	
</script>

