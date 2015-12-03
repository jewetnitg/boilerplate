<model-list>
  <div each={ collection }>
    <a href="/user/{ this.id }">{ this.firstName }</a>
  </div>

  <script>
    this.collection = opts.collection;
  </script>
</model-list>