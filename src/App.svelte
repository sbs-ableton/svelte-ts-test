<script lang="typescript">
    export let count = 0;
    function handleClick(): number {
        count += 1;
        return count;
    }
    console.log('app loaded')
</script>

<button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

