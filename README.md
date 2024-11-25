# ddu-source-item

any item source for ddu.vim

This source collects items from items param.

## Required

### denops.vim

https://github.com/vim-denops/denops.vim

### ddu.vim

https://github.com/Shougo/ddu.vim

## Configuration

```vim
xnoremap ;g <Cmd>call DduUrlItems()<CR>

function! DduUrlItems()
  const region = getregion(getpos('v'), getpos('.'), #{ type: mode() })
  if region->empty()
    return
  endif

  const url = region[0]->substitute('\s*\n\?$', '', '')

  const items = [
        \    #{
        \      word: url,
        \      kind: 'url',
        \      action: #{
        \        url: url,
        \      },
        \    },
        \ ]

  call ddu#start(#{
        \   sources: ['item'],
        \   sourceParams: #{
        \     item: #{
        \       items: items,
        \     },
        \   },
        \ })
endfunction
```
