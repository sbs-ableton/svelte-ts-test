<script lang="typescript">
    import { increment } from "./helper"
    export let count = 0;
    function handleClick(): number {
        count = increment(count);
        return count;
    }
    console.log('app loaded')
</script>

<button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

